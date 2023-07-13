import React from 'react'
import './Widget.css'
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading,subtitle) =>(
        <div className="widgets__article">
             <div className="widgets__articleLeft">
            <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>
        {newsArticle("React is back", "Top news - 1000 readers")}
        {newsArticle("React-Redux the latest in town ", "Top news - 700 readers")}
        {newsArticle("Data structures why it's important", "Top news - 80 readers")}
    </div>
  )
}

export default Widgets