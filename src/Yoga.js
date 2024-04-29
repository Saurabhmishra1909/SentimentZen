import React from 'react'
import YogaList from './YogaList'
import yogaData from './yogaData'

export default function Yoga(props) {
    const { emotionLabel } = props;
    // Filter songs based on the emotionLabel
    const filteredYoga = yogaData.filter(yog => yog.emotion === emotionLabel);
    return (
      <>
        <h2>Feeling {emotionLabel} - Here are some Yoga and Meditation</h2>
        {filteredYoga.map(yog => (
          <YogaList yoga={yog.Yoga} description={yog.Description} video={yog.Video} />
        ))}
  
      </>
    )
}
