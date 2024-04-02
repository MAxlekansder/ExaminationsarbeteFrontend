// Kristian



const NavBarComponent = () => {
    return (
        <header className="flex">
            <div className="py-1">
                <a href="/">
                    <img src="./Images/logo1.png" alt="Logo" className="h-10 absolute" />
                </a>
            </div>
            <nav className="flex-grow bg-white px-4 py-2 pb-4">
                <ul className="flex w-full list-none p-0 m-0 items-center sm:pl-10 xl:pl-4">
                    <li><a href="/" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Home</a></li>
                    <li><a href="/home" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Categories</a></li>
                    <li><a href="/weeklytips" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Weekly Tips</a></li>
                    <li><a href="/cocktails" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">Cocktails</a></li>
                    <li><a href="/about" className="px-5 py-2 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:text-green-500">About us</a></li>
                    <li className="ml-auto"><a href="/add" className="px-5 py-2 bg-green-400 text-black no-underline font-bold text-medium transition-colors duration-200 ease-in-out hover:bg-green-600 rounded-lg shadow">Add recipe</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBarComponent;