import {Star} from "lucide-react"

export default function StarRating({rating}) {

    const renderStars = () => {
        const stars = []
        for(let i = 0; i < 5; i++) {
            stars.push(
                <span key={i} className="star">
                    {i < rating? <Star fill="gold" color="gold" size={18}/>: <Star size={18} color="gray"/>}
                </span>
            )
        }
        return stars
    }

    return(
        <>
        <div className="star-rating">
            <div className="stars">
                {renderStars()}
            </div>
        </div>
        </>
    )
}
