import React from 'react'
import { useParams } from 'react-router-dom'
import { Issue } from '../components'
import { issues } from '../model'

interface IRouteParams {
  id: string
}

const Posts = () => {
  const { id } = useParams<IRouteParams>()
  const idNumber = parseInt(id)
  const issue = issues.find(i => i.id === idNumber)

  return <Issue issue={issue}></Issue>
}

export default Posts
