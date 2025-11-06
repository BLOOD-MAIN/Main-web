"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface Comment {
  id: number
  author: string
  text: string
  date: string
}

export function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      author: "Alex Dev",
      text: "Amazing bot capabilities! Really impressed with the performance.",
      date: "2 days ago",
    },
    {
      id: 2,
      author: "Sam Designer",
      text: "The mini bot is incredibly useful for quick tasks. Love it!",
      date: "1 week ago",
    },
  ])

  const [newComment, setNewComment] = useState("")

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([
        ...comments,
        {
          id: comments.length + 1,
          author: "Anonymous User",
          text: newComment,
          date: "just now",
        },
      ])
      setNewComment("")
    }
  }

  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-foreground">Comments</h3>

      {/* Add Comment */}
      <Card className="bg-card border-border p-6">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Share your thoughts about blood-xmd..."
          className="w-full bg-background text-foreground border border-border rounded-lg p-4 placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary mb-4 resize-none"
          rows={4}
        />
        <Button onClick={handleAddComment} className="bg-primary hover:bg-primary/80 text-primary-foreground">
          Post Comment
        </Button>
      </Card>

      {/* Comments List */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <Card key={comment.id} className="bg-card border-border p-6">
            <div className="flex justify-between items-start mb-3">
              <h4 className="font-semibold text-foreground">{comment.author}</h4>
              <span className="text-sm text-muted-foreground">{comment.date}</span>
            </div>
            <p className="text-foreground/80">{comment.text}</p>
          </Card>
        ))}
      </div>
    </div>
  )
}
