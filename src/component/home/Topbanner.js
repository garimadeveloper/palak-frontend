
function Topbanner() {
  const data = {
    heading: `Elevate Customer Experience With Our Innovative CRM`,
    desc: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.`
  };
  return (
    <>
      <div className="min-h-screen bg-white" style={{ backgroundImage: `url(/image/svgviewer-output.png")`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <main className="text-center p-16 bg-[#F8F8F8] flex justify-center items-center flex-col">
          <div className="bg-white  p-2 flex justify-center items-center rounded-3xl">
            <div className="flex gap-4 px-4">
              <img
                src="https://cc-prod.scene7.com/is/image/CCProdAuthor/mascot-logo-design_P1_900x420?$pjpeg$&jpegSize=200&wid=900"
                alt="Company Logo"
                width={30}
                height={30}
              />
              <p className="font-semibold text-sm">
                {data.heading}
              </p>
            </div>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mt-8">
            Empowering Your Business with Cutting-Edge Technology
          </h1>
          <p className="text-gray-600 mt-4">
            {data.desc}
          </p>
          <div className="mt-8 flex items-center space-x-4">
            <button className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-500 flex items-center space-x-2">
              <span>Contact Sales</span>
            </button>
            <button className="px-8 py-3 bg-gray-200 text-gray-800 rounded flex hover:bg-gray-300">
              <img src={"/image/play-circle.png"} width={18} height={18} className='mt-1 ml-2' alt="Play Icon" />
              <span className='ml-4'>Get Started</span>
            </button>
          </div>
        </main>
        <div>
        <img
              src={"/image/Group 663.png"} // Use the newly uploaded image here
              alt="Dashboard"
              className="rounded-lg shadow-lg w-full h-[800px]"
            />
        </div>
        {/* <section className="p-16 bg-gray-100 w-[100%]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            
          </div>
          <div className="   ">
            <h1> 20,000 companies managed their projects with biz pro</h1>
          </div>
          <div className = " grid  flex items center-justify  ">
          </div>
        </section> */}
       
      </div>
    </>
  );
}
export default Topbanner;
