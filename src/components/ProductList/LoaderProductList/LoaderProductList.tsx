import ContentLoader from "react-content-loader";

const LoaderProductList = () => {
  return (
    <ContentLoader
    speed={2}
    width={1344}
    height={434}
    viewBox="0 0 1344 434"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    >
    <rect x="135" y="244" rx="0" ry="0" width="222" height="0" /> 
    <rect x="17" y="4" rx="20" ry="20" width="280" height="320" />
    <rect x="344" y="4" rx="20" ry="20" width="280" height="320" />
    <rect x="680" y="4" rx="20" ry="20" width="280" height="320" />
    <rect x="1000" y="4" rx="20" ry="20" width="280" height="320" />

    <rect x="17" y="345" rx="20" ry="20" width="280" height="320" />
    <rect x="344" y="345" rx="20" ry="20" width="280" height="320" />
    <rect x="680" y="345" rx="20" ry="20" width="280" height="320" />
    <rect x="1000" y="345" rx="20" ry="20" width="280" height="320" />
    </ContentLoader>
  );
};

export default LoaderProductList;