import React, { useState } from 'react';
import Chart from 'chart.js/auto';
import Songs from './Songs';
import Books from './Books';
import Podcast from './Podcast';
import Movie from './Movie';
import Yoga from './Yoga';
import './Startt.css';
let tempEmo;
const Startt = () => {
    const [chartInstance, setChartInstance] = useState(null);
    const [suggestionsVisible, setSuggestionsVisible] = useState(false);
    const [emotionLabel, setEmotionLabel] = useState(null);
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [loading, setLoading] = useState(false); // State to manage loading state

    const performQuery = async () => {
        const queryInput = document.getElementById('queryInput').value.trim();

        if (queryInput !== '') {
            try {
                setLoading(true); // Show loading state

                const response = await queryApi({ inputs: queryInput });
                const responseData = response[0];
                const data = responseData.map(({ label, score }) => ({ label, score }));
                tempEmo = data[0].label;
                const ctx = document.getElementById('myChart');
                const newChartInstance = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: data.map(row => row.label),
                        datasets: [{
                            label: data[0].label,
                            data: data.map(row => row.score),
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)'
                            ],
                            borderColor: [
                                'rgba(255, 99, 132, 1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)'
                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }
                });

                setChartInstance(newChartInstance);
                setEmotionLabel(data[0].label);
                showSuggestions();
                showChart();
            } catch (error) {
                console.error('Error performing query:', error);
            } finally {
                setLoading(false); // Hide loading state regardless of success or error
            }
        } else {
            console.warn('Query input is empty');
        }
    };

    const handleButtonClick = (label) => {
        setEmotionLabel(label); // Set emotion label based on button clicked
        setSelectedComponent(label.toLowerCase()); // Set selected component based on button clicked

        // Scroll to the recommendations section
        document.getElementById('recommend').scrollIntoView({ behavior: 'smooth' });
    };

    const redirectToPage = (pageUrl) => {
        window.location.href = pageUrl;
    };

    const queryApi = async (data) => {
        const response = await fetch(
            "https://api-inference.huggingface.co/models/SamLowe/roberta-base-go_emotions",
            {
                headers: { Authorization: "Bearer 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" },
                method: "POST",
                body: JSON.stringify(data),
            }
        );
        const result = await response.json();
        return result;
    };

    const showChart = () => {
        document.getElementById('queryInput').style.display = 'none';
        document.getElementById('submitBtn').style.display = 'none';
        document.getElementById('speechRecognitionBtn').style.display = 'none';
        document.getElementById('suggestionsSection').style.display = 'block';
    };

    const showSuggestions = () => {
        setSuggestionsVisible(true);
    };

    const startSpeechRecognition = () => {
        // Placeholder function for starting speech recognition
        console.log('Starting speech recognition...');
        // You can implement speech recognition functionality here
    };

    // Render the selected component based on button click
    const renderSelectedComponent = () => {
        switch (selectedComponent) {
            case 'songs':
                return <Songs emotionLabel={tempEmo} />;
            case 'books':
                return <Books emotionLabel={tempEmo} />;
            case 'podcast':
                return <Yoga emotionLabel={tempEmo} />;
            case 'movies':
                return <Movie emotionLabel={tempEmo} />;
            default:
                return null;
        }
    };

    return (
        <div className="content">
            <h1>SentimentZen</h1>
            <p>Take a moment to immerse yourself in the beauty of life's simple joys. Let the gentle whispers of nature soothe your soul, as you embrace the warmth of a sun-kissed breeze.</p>
            <p> Feel the rhythm of your heartbeat synchronize with the melody of the universe, reminding you of the infinite possibilities that lie ahead. Allow gratitude to fill your heart and gratitude to guide your path.</p>
            <div className="container">
                <canvas id="myChart"></canvas>
                <div className="input-container" id="textInputLabel">
                    <input type="text" id="queryInput" placeholder="How are you feeling?" />
                    <button id="submitBtn" onClick={performQuery} className={loading ? 'loading' : ''}>Submit</button>
                    
                </div>

                <div className="or-divider" id="orDivider">OR</div>

                <div className="input-container">
                    <button id="speechRecognitionBtn" onClick={startSpeechRecognition}>Start Speech Recognition</button>
                </div>
                <p id="firstemotionText">{emotionLabel && `Based on the analysis you seem to be feeling: ${tempEmo}`}</p>
                {suggestionsVisible && (
                    <div id="suggestionsSection">
                        <p id="emotionText">Here are some suggestions based on your mood:</p>
                        <div className="suggestions-container">
                            <button className="button" onClick={() => handleButtonClick('Songs')}>
                                <img src="imgs/song.png" alt="Songs" />
                                <h2 className='textt'>Songs</h2>
                            </button>
                            <button className="button" onClick={() => handleButtonClick('Books')}>
                                <img src="imgs/book.png" alt="Books" />
                                <h2 className='textt'>Books</h2>
                            </button>
                            <button className="button" onClick={() => handleButtonClick('Podcast')}>
                                <img src="imgs/podcast.png" alt="Podcast" />
                                <h2 className='textt'>Meditaion and Yoga</h2>
                            </button>
                            <button className="button" onClick={() => handleButtonClick('Movies')}>
                                <img src="imgs/movie.png" alt="Movies" />
                                <h2 className='textt'>Movies</h2>
                            </button>
                            
                        </div>
                    </div>
                    
                )}
            </div>
            <div id="recommend">
                {selectedComponent && renderSelectedComponent()}
            </div>
        </div>
    );
};

export default Startt;
