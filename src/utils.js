// import { hotelsData } from "./back-info";

export const sizeTransformer = (size) => {
  if (size < 10) {
    return "Pequeño";
  } else if (size >= 10 && size < 20) {
    return "Mediano";
  } else return "Grande";
};

export const priceTransformer = (price) => {
  if (price === "") {
    return "";
  } else if (price === "$") {
    return 1;
  } else if (price === "$$") {
    return 2;
  } else if (price === "$$$") {
    return 3;
  } else return 4;
};

// export const sizeTransformer = (size) =>{

// 	if (size === "Pequeño") {
// 	   return 10
//    } else if (size === "Mediano") {
// 	   return 19
//    } else
// 	   return 20

// }

export let filterHotels = (
  arrayHotels,
  startDate,
  endDate,
  country,
  price,
  size
) => {
  const filteredArray = arrayHotels

    .filter(function (hotel) {
      console.log(
        "esta es la fecha DESDE del hotel: " + hotel.availabilityFrom
      );
      console.log("esta es la fecha DESDE del INPUT: " + startDate);
      console.log("esta es la fecha HASTA del INPUT: " + endDate);

      if (startDate === " " || endDate === " ") {
        return hotel;
      } else if (startDate <= endDate) {
        return (
          hotel.availabilityFrom <= endDate && hotel.availabilityTo >= startDate
        );
      } else return hotel;
    })

    .filter(function (hotel) {
      if (country !== "all") {
        return hotel.country === country;
      }
      return hotel;
    })

    .filter(function (hotel) {
      if (price !== "all") {
        let priceCategory = priceTransformer(price);
        //  console.log(priceCategory)
        return priceCategory === hotel.price;
      }

      return hotel;
    })

    .filter(function (hotel) {
      if (size !== "all") {
        let sizeCategory = sizeTransformer(hotel.rooms);

        return sizeCategory === size;
      }
      return hotel;
    });

  return filteredArray;
};

//FUNCIONES PARA MOSTRAR FILTRO EN EL HEADER //

//pais

export let showCountry = (country) => {
  if (country !== "all") {
    return "En " + country;
  } else return "De cualquier lugar";
};

// precio
export let showPrice = (price) => {
  let priceConversor = (valor) => {
    if (valor === "$") {
      return "De bajo precio";
    } else if (valor === "$$" || valor === "$$$") {
      return "De precio medio";
    } else {
      if (valor === "$$$$") {
        return "De precio elevado";
      }
    }
  };

  if (price !== "all") {
    return priceConversor(price);
  } else return "De cualquier precio";
};


//tamaño

export let showSize = (size) =>{
  if (size !== "all"){
    return "De tamaño " + size.toLowerCase()
  } else return "De cualquier tamaño"

}

