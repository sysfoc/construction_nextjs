import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"
import { verifyToken } from "@/lib/jwt"
import { connectDB } from "@/lib/mongodb"
import Gallery, { type GalleryCategory, type GalleryImage } from "@/lib/models/Gallery"

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ action: string; id: string }> }
) {
  try {
    const token = (await cookies()).get("token")?.value

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const payload = await verifyToken(token)

    if (!payload || payload.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { action, id } = await params
    await connectDB()

    const gallery = await Gallery.findOne()
    if (!gallery) {
      return NextResponse.json({ error: "Gallery not found" }, { status: 404 })
    }

    if (action === "category") {
      gallery.categories = gallery.categories.filter((cat: GalleryCategory) => cat._id.toString() !== id)
      gallery.images = gallery.images.filter((img: GalleryImage) => img.categoryId.toString() !== id)
    } else if (action === "image") {
      gallery.images = gallery.images.filter((img: GalleryImage) => img._id.toString() !== id)
    }

    await gallery.save()
    return NextResponse.json({
      categories: gallery.categories,
      images: gallery.images,
    })
  } catch (error) {
    console.error("Error deleting from gallery:", error)
    return NextResponse.json({ error: "Failed to delete from gallery" }, { status: 500 })
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ action: string; id: string }> }
) {
  try {
    const token = (await cookies()).get("token")?.value

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const payload = await verifyToken(token)

    if (!payload || payload.role !== "admin") {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 })
    }

    const { action, id } = await params
    const { data } = await request.json()
    await connectDB()

    const gallery = await Gallery.findOne()
    if (!gallery) {
      return NextResponse.json({ error: "Gallery not found" }, { status: 404 })
    }

    if (action === "category") {
      const category = gallery.categories.find((cat: GalleryCategory) => cat._id.toString() === id)
      if (category) {
        category.name = data.name
      }
    }

    await gallery.save()
    return NextResponse.json({
      categories: gallery.categories,
      images: gallery.images,
    })
  } catch (error) {
    console.error("Error updating gallery:", error)
    return NextResponse.json({ error: "Failed to update gallery" }, { status: 500 })
  }
}
