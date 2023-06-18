import React from "react";
import "./List.scss";
import Card from "../Card/Card" 

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://w0.peakpx.com/wallpaper/884/434/HD-wallpaper-emma-stone-hoot-american-actress-beautiful-dress-american-star-popular-actress.jpg",
      img2: "https://newsimages.fashionmodeldirectory.com/content/2018/01/MAY-2015-GUESS-S1-Copy.jpg",
      title: "Dress One",
      isNew: true,
      oldPrice: 19,
      newPrice: 14,
    },
    {
      id: 2,
      img: "https://www.thegoodtrade.com/wp-content/uploads/2023/01/american-made-clothing.jpg",
      title: "Dress Two",
      isNew: true,
      oldPrice: 29,
      newPrice: 24,
    },
    {
      id: 3,
      img: "https://previews.123rf.com/images/indiraswork/indiraswork1606/indiraswork160600171/60533237-beautiful-woman-wear-fashion-design-dress-glamour-style-model-pose-elegance-business-casual.jpg",
      title: "Dress Three",
      isNew: false,
      oldPrice: 39,
      newPrice: 24,
    },
    {
      id: 4,
      img: "https://cdn0.weddingwire.in/article/9682/original/1280/jpg/42869-cocktail-party-dress-coolbluezphotography-gottapatti1.jpeg",
      title: "Dress Four",
      isNew: false,
      oldPrice: 499,
      newPrice: 440,
    },
    {
        id: 5,
        img: "https://previews.123rf.com/images/indiraswork/indiraswork1606/indiraswork160600171/60533237-beautiful-woman-wear-fashion-design-dress-glamour-style-model-pose-elegance-business-casual.jpg",
        title: "Dress Three",
        isNew: false,
        oldPrice: 39,
        newPrice: 24,
      },
      {
        id: 6,
        img: "https://previews.123rf.com/images/indiraswork/indiraswork1606/indiraswork160600171/60533237-beautiful-woman-wear-fashion-design-dress-glamour-style-model-pose-elegance-business-casual.jpg",
        title: "Dress Three",
        isNew: false,
        oldPrice: 39,
        newPrice: 24,
      },
      {
        id: 7,
        img: "https://previews.123rf.com/images/indiraswork/indiraswork1606/indiraswork160600171/60533237-beautiful-woman-wear-fashion-design-dress-glamour-style-model-pose-elegance-business-casual.jpg",
        title: "Dress Three",
        isNew: false,
        oldPrice: 39,
        newPrice: 24,
      },
  ];

  return (
    <div className="list">
        {
            data?.map(item => <Card item={item} key={item.id}></Card>)
        }
    </div>
  );
};

export default List;
