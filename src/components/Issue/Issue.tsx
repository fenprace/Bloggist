import React from 'react'
import marked from 'marked'
import styles from './styles.module.css'

interface IIssueProps {
  issue: IIssue
}

const Issue = ({ issue }: IIssueProps) => {
  return (
    <div className={styles.issue}>
      <h1>{issue.title}</h1>
      <ul className={styles.tagList}>
        {issue.labels.map(l => (
          <li style={{ backgroundColor: `#${l.color}` }}>{l.name}</li>
        ))}
      </ul>
      <div dangerouslySetInnerHTML={{ __html: marked(issue.body) }} />
    </div>
  )
}

export default Issue
