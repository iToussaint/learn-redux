import { useGetAllProductsQuery } from "./products.service";

function ProductsPage() {
  const { data, isError, isLoading } = useGetAllProductsQuery();


  console.log(data.products)
  if (isError) {
    return "Something went wrongg..";
  }

  if (isLoading) {
    return "Loadinggg....";
  }

  return (
    <>
      <h1>Products</h1>

      <div>
        {data.products.map(product => <h1>{product.title}</h1>)}
      </div>
    </>
  );
}

export default ProductsPage;
