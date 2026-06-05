import { useEffect, useRef } from 'react'

function ChatWindow({ messages, isLoading }) {
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  return (
    <div className="chat-window">
      {messages.map((msg, i) => (
        <div key={i} className={`message message--${msg.role}`}>
          <div className="message-bubble">{msg.content}</div>
        </div>
      ))}
      {isLoading && (
        <div className="message message--assistant">
          <div className="message-bubble message-bubble--thinking">Claude is thinking...</div>
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  )
}

export default ChatWindow
