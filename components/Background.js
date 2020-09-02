
const Background = () => (
  <div className="h-screen w-screen bg-teal-400 overflow-hidden absolute flex items-center">
    <div className="w-screen h-64 absolute top-0 opacity-50 left-0 -my-40 -mx-64 bg-teal-300 rounded-full" />
    <div className="w-64 h-64 -mx-32 bg-teal-300 opacity-50 rounded-full" />
    <div className="w-64 h-64 ml-auto relative opacity-50 -mr-32 bg-teal-300 rounded-full" />
    <div className="w-screen h-64 absolute opacity-50 bottom-0 right-0 -my-40 -mx-64 bg-teal-300 rounded-full" />
  </div>
);

export default Background;
