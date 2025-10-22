import { type NextRequest, NextResponse } from "next/server"
import { connectDB } from "@/lib/mongodb"
import News from "@/lib/models/News"

export async function GET(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    await connectDB()
    const article = await News.findOne({ slug: params.slug })

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    return NextResponse.json({
      id: article._id,
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      date: article.date,
      author: article.author,
      image: article.image,
      content: article.content,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
    })
  } catch (error) {
    console.error("Get article error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    await connectDB()
    const updateData = await request.json()

    const article = await News.findOneAndUpdate({ slug: params.slug }, updateData, { new: true })

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    return NextResponse.json({
      id: article._id,
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      date: article.date,
      author: article.author,
      image: article.image,
      content: article.content,
      createdAt: article.createdAt,
      updatedAt: article.updatedAt,
    })
  } catch (error) {
    console.error("Update article error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { slug: string } }) {
  try {
    await connectDB()
    const article = await News.findOneAndDelete({ slug: params.slug })

    if (!article) {
      return NextResponse.json({ error: "Article not found" }, { status: 404 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Delete article error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
