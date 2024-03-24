type ParamsProps = {
  params: { id: string };
};

const WatchMovie = ({ params }: ParamsProps) => {
  const { id } = params;
  return <div>{id}</div>;
};
export default WatchMovie;
