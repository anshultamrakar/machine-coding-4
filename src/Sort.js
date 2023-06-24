import React from 'react'

const Sort = () => {
  return (
    <div>
      <label for="">Sort by:</label>
      <br/>
        <select id="cars" name="cars">
        <option value="volvo">Latest post</option>
        <option value="saab">Most Upvoted post</option>
        </select>
    </div>
  )
}

export default Sort