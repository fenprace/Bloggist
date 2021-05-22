import React from 'react'
import marked from 'marked'

interface IIssueProps {
  issue: IIssue
}

const Issue = ({ issue }: IIssueProps) => {
  return (
    <div>
      <h2>{issue.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: marked(issue.body) }} />
    </div>
  )
}

export default Issue
