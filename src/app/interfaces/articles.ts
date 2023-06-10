import { User } from "./user"

export interface Articles {
    type_of: string
    id: number
    title: string
    description: string
    readable_publish_date: string
    slug: string
    url: string
    comments_count: number
    public_reactions_count: number
    published_timestamp: string
    positive_reactions_count: number
    cover_image: string
    social_image: string
    canonical_url: string
    created_at: string
    edited_at: string
    published_at: string
    reading_time_minutes: number
    tag_list: string[]
    user: User
}  