import React from 'react'
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css'

function Feed() {
  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon></CreateIcon>
                <form >
                    <input type="text" />
                    <button>Send</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Feed 