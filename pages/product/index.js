import Link from "next/link";
import { useRouter } from "next/router";
const ProductList = () => {
  const router = useRouter()

  const handleClick = ()=>{
    console.log('placing order')
    router.push('/product')
  }

  return (
    <>
      <Link href="product/1">
        <h1>Product 1</h1>
      </Link>
      <Link href="product/2">
        <h1>Product 2</h1>
      </Link>
      <Link href="product/3">
        <h1>Product 3</h1>
      </Link>
      <button onClick={handleClick}>Place Order</button>
    </>
  );
};

export default ProductList;
