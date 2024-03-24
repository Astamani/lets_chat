// utils.js
import React from 'react'

const extractTime = (createdAt) => {
 const date = new Date(createdAt);
 const hours = date.getHours();
 const minutes = date.getMinutes();
 const formatedTime = `${hours}:${minutes}`
 return formatedTime;
}

export default extractTime
