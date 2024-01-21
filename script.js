$('#footer').hide();

async function dynamic() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/');
        if (!response.ok) {
            throw new Error(`error! Status: ${response.status}`);
        }
        const data = await response.json();

        if (data) {
            data.forEach(element => {
                $('#main-container').append(`
                <div class="flex flex-col items-center p-2 shadow-lg h-[600px] text-base md:text-md">
                <img src="${element.image}" class="w-1/2 md:w-1/4 h-1/2" alt="Image Of Product">
                <div class="px-6 py-4 flex flex-col h-1/2">
                <h1 class="font-bold text-lg md:text-xl mb-2 text-stone-700">${element.title}</h1>
                <p class="text-gray-700 overflow-hidden">${element.description}</p>
                <div class="pt-4 pb-2 text-gray-700 mt-auto "><span class="inline-block bg-gray-300 rounded-full px-3 my-3 font-semibold hover:bg-sky-500 cursor-pointer hover:text-white">Category: ${element.category}</span>
                <span class="inline-block bg-gray-300 rounded-full my-3 px-3 font-semibold hover:bg-sky-500 cursor-pointer hover:text-white">Price: ${element.price}</span>
                <span class="inline-block bg-gray-300 rounded-full my-3  px-3 font-semibold hover:bg-sky-500 cursor-pointer hover:text-white">Rating: ${element.rating.rate}</span>
                <span class="inline-block bg-gray-300 rounded-full my-3 px-3 font-semibold hover:bg-sky-500 cursor-pointer hover:text-white">Count: ${element.rating.count}</span></div>
                </div>
                </div>`);
            });
        } else {
            $('#main-container').removeClass('md:grid-cols-2');
            $('#main-container').append(`
                <div class="flex flex-col items-center p-8">
                <p class="text-xl font-bold text-red-600">Unable To Load Data</p>
                </div>
            `);
        }
        $('#footer').show();

    } catch (error) {
        console.error(error);
        $('#main-container').removeClass('md:grid-cols-2');
        $('#main-container').append(`
                <div class="flex justify-center p-8">
                <p class="text-xl font-bold text-red-600">Unable To Load Data</p>
                </div>
            `);
        $('#footer').show();
    }
}

dynamic();
