import React from 'react';

export function UserInfo(props) {
  return(
    <div>
      user information
      <div>
        hello!! - {props.username}
      </div>
    </div>
  )
}
