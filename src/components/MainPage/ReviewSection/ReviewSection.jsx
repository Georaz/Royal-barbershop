import c from './ReviewSection.module.css';
import CommentFormContainer from "../../FormControls/CommentForm/CommentFormContainer";
import ReviewSlider from "./ReviewSlider/ReviewSlider";

const ReviewSection = (props) => {
    return (
        <section>
            <div className={c.headingWrapper}>
                <h2 className={c.heading}>Отзывы о нас</h2>
            </div>
            <div className={c.reviewsContainer}>
                <ReviewSlider comments={props.comments}/>
                <CommentFormContainer/>
            </div>
        </section>
    )
}

export default ReviewSection;