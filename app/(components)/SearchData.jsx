"use client"
import { Urbanist } from "next/font/google";
import { getRecipesBySearch } from "../api/api";
import { useState } from "react";
import Link from "next/link";
const urbanist = Urbanist({ subsets: ["latin"] });



const SearchData = () => {
    const [searchData, setSearchData] = useState()

    const handleSearch = async (e) => {
        const recipe = await getRecipesBySearch(e.target.value)
        setSearchData(recipe)
    }

    console.log(searchData)

    return (
        <>
            {/* <div className={`flex flex-col gap-5 h-${searchData ? "[50rem]" : "full"} items-center justify-center w-full absolute z-40 lg:w-9/12  lg:translate-y-24 lg:translate-x-20 lg:justify-normal lg:items-baseline md:justify-center sm:justify-center  sm:items-center sm:flex-col sm:w-full`}>
                <h1 className={`${urbanist.className} text-4xl lg:text-7xl font-semibold sm:text-4xl`}>Search any recipe</h1>
                <input type="text" name="search" id="search" placeholder="Search..." className=' z-50 rounded-full p-3 w-70 lg:w-96 sm:96 bg-search-bar border-2 border-search-bar-border' onChange={handleSearch} />
                <div className={`h-${searchData ? "[35rem]" : "full"} overflow-y-auto w-[50%]`}>
                    {searchData?.recipes?.map((item, index) => (
                        <Link href={`/RecipeDetail/${item._id}`}>
                            <div key={index} className="bg-nav z-40 flex flex-col lg:flex-row gap-5 w-full justify-start text-nav-text">
                                <picture>
                                    <img src={item.imgURL} className="w-56" />
                                </picture>
                                <h1>{item.title}</h1>
                            </div>
                        </Link>
                    ))}
                </div>
            </div> */}
            <div className="absolute z-30 h-[13rem] items-center lg:items-start lg:h-96 w-[100%] flex flex-col justify-center gap-5 lg:translate-x-5 lg:w-[80%]">
                <h1 className={`${urbanist.className} text-4xl lg:text-7xl font-semibold sm:text-4xl`}>Search any recipe</h1>
                <input type="text" name="search" id="search" placeholder="Search..." className=' z-50 rounded-full p-3 w-70 lg:w-96 sm:96 bg-search-bar border-2 border-search-bar-border' onChange={handleSearch} />
                {searchData?.recipes?.length > 0 ?
                    <div className="absolute bg-nav h-72 z-40 w-[80%] lg:w-[70%] top-[10rem] lg:top-[15rem] rounded-lg overflow-auto py-8 px-2 border-2 border-black">
                        <div className="flex flex-col gap-5">
                            {searchData.recipes.map((item) => (
                                <Link href={`/RecipeDetail/${item._id}`}>
                                    <div className="flex flex-col lg:flex-row gap-2 items-center lg:items-start" key={item.id}>
                                        <picture>
                                            <img src={item.imgURL} className="w-52 rounded-lg h-[150px] object-cover" alt={item.title} />
                                        </picture>
                                        <h1 className="text-nav-text text-2xl font-bold">{item.title}</h1>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div >
                    : <></>
                }
            </div >
        </>
    )
}

export default SearchData