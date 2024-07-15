import Link from "next/link";
// Initialization for ES Users
// import './hero.css'

const Hero = () => {  
  return (
    <>  
    <header className="relative flex items-center justify-center h-screen  overflow-hidden">

      <section
          id="home"
          className="relative z-30 overflow-hidden pt-[120px] pb-16 md:pt-[150px] md:pb-[120px] xl:pt-[180px] xl:pb-[160px] 2xl:pt-[210px] 2xl:pb-[200px]"
        >

        <div 
        className="container">    
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div
                className="wow fadeInUp mx-auto max-w-[800px] text-center"
                data-wow-delay=".2s"
              >
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight"
                data-te-animation-init
                data-te-animation-start="onScroll"
                data-te-animation-on-scroll="repeat"
                data-te-animation-show-on-load="true"
                data-te-animation="[slide-right_1s_ease-in-out]">
                Tăng Cường Hiệu Suất Kinh Doanh Với CSKH AI Đa Ngôn Ngữ
                </h1>
                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                Đừng bỏ lỡ cơ hội dẫn đầu trong kỷ nguyên tự động hóa AI. Hãy trang bị cho doanh nghiệp của bạn một trợ lý AI thông minh,
                giúp khách hàng giải đáp mọi thắc mắc và vấn đề một cách nhanh chóng, đồng thời tăng doanh số bán hàng vượt bậc.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/waitlist"
                    className="rounded-md bg-primary py-4 px-8 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                    style={{ width: "600px" }}
                  >
                   🔥 Tôi Muốn
                  </Link>
                </div>
              </div>
            </div>
            
          </div> 
        </div>
      </section>

      <video autoPlay loop muted className="absolute z-10 w-auto min-w-full min-h-full max-w-none">
        <source src="/1.mp4" type="video/mp4" />
      {/* something from 1 or 2 */}
      </video>

      </header>
    </>
  );
};

export default Hero;
