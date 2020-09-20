import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { okaidia } from 'react-syntax-highlighter/dist/esm/styles/prism'

interface PostCodeProps {
  language: string
  children: React.ReactNode
}

const PostCode: React.FC<PostCodeProps> = ({ language, children }) => {
  return (
    <div className="gatsby-highlight">
      <SyntaxHighlighter
        className={`language-${language}`}
        style={okaidia}
        language={language}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  )
}

export default PostCode
