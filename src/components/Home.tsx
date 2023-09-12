import { Footer, HomeHeader, SearchInput } from "../components"

const Logo = require('../assets/google-logo.png')


export default function Home(): JSX.Element {
  return (
    <div className="h-[100vh] flex flex-col">
      <HomeHeader />
      <main className="grow flex justify-center">
        <div className="w-full px-5 flex flex-col items-center mt-44">
          <img className="w-[172px] md:w-[272px] mb-8" src={Logo} alt="Logo" />
          <SearchInput />
          <div className="flex gap-2 text-black mt-8">
            <button className="h-9 px-4 bg-primary-gray text-sm rounded-md border border-primary-gray hover:border-primary-dark hover:shadow-c2">
              Google Search
            </button>
            <button className="h-9 px-4 bg-primary-gray text-sm rounded-md border border-primary-gray hover:border-primary-dark hover:shadow-c2">
              I'm Feeling Lucky
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}