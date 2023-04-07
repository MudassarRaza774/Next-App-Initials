import { useRouter } from "next/router";

const Review = () => {
  const router = useRouter();
  const productId = router.query.productId;
  const reviewId = router.query.reviewId;

  return (
    <h3>
      Review {reviewId} for product {productId}
    </h3>
  );
};

export default Review;
