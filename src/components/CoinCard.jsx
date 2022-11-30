import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";

const CoinCard = ({ id, name, img, symbol, price, currencySymbol, coinPrice = "₹" }) => (
  <Link to={`/coin/${id}`}>
    <VStack
      w={"52"}
      shadow={"lg"}
      p={"8"}
      borderRadius={"lg"}
      transition={"all 0.3s"}
      m={"4"}
      style={{backgroundColor:"rgb(44, 39, 39)"}}
      className={
                  coinPrice< 0 ? "datas" : "datasGreen"
              }

      css={{
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <Image
        src={img}
        w={"10"}
        h={"10"}
        objectFit={"contain"}
        alt={"Exchange"}
      />
      <Heading size={"md"} noOfLines={1}>
        {symbol}
      </Heading>

      <Text noOfLines={1}>{name}</Text>
      <Text noOfLines={1}>{price ? `${currencySymbol}${price}` : "NA"}</Text>
      <div className="coinData">
      <span noOfLines={1}>{coinPrice} </span>
       <span className="target">{coinPrice>0?(
                    <TrendingUpIcon className="green" />
                  ) : (
                    <TrendingDownIcon className="red" />
                  )}</span>
                 
                  </div>
    </VStack>
  </Link>
);

export default CoinCard;
