import React, { useState } from 'react'

import { useDispatch } from 'react-redux'

import { nanoid } from '@reduxjs/toolkit'

import { postAdded } from './postSlice'

export const AddPostForm = () => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [Age, setAge] = useState('')
  const [country, setCountry] = useState('')

  const dispatch = useDispatch()

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAgeChanged = e => setAge(e.target.value)
  const onCountryChanged = e => setCountry(e.target.value)

  const onSavePostClicked = () => {
    if (title && content && Age && country) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
          Age,
          country
        })
      )

      setTitle('')
      setContent('')
      setAge('')
      setContent('')
    }
  }

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="yourAge">Your Age:</label>
        <input
        type="number"
        id="yourAge"
        name="yourAge"
        value={Age}
        onChange={onAgeChanged}
        
        />
        <label htmlFor="yourCountry">Your Country:</label>
        <input
         type="text"
         id="postCountry"
         name="postCountry"
         value={country}
         onChange={ onCountryChanged}
        
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button"  onClick={onSavePostClicked}>Save Post</button>
      </form>
    </section>
  )
}