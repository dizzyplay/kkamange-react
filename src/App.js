import React from 'react';
import './App.css'


function App(props) {
  let comment = [
    {
      name:'james',
      comment:'hello hi'
    },
    {
      name:'vovo',
      comment:'hi there hi'
    },
    {
      name:'dasom',
      comment:'hi hi im hungry hi'
    },
  ];
  const title = "hi this is title"

  return (
    <div className="main">
      <ImgDiv
        title={title}
        imgUrl="http://kkamange.site/media/image/2019/01/14/86C0F8F2-6D50-41D8-B9E8-E5F115F64B3D.jpg"
        comment={comment}
      />
    </div>
  )
}

function ImgDiv(props) {
  return (
    <div className="mainImageDiv">
      <h2>{props.title}</h2>
      <ShowPhoto imgUrl={props.imgUrl} alt={props.alt}/>
      <Comment comment={props.comment}/>
    </div>
  )
}

function Comment(props) {
  const comment = props.comment;
  const commentList = comment.map(c => <li>{c.name} - {c.comment}</li>);
  return (
    <div>
      <ul>
        {commentList}
      </ul>
    </div>
  )
}

function ShowPhoto(props) {
  return (
    <img width="300" src={props.imgUrl} alt={props.alt}/>
  )
}

export default App;