import React from "react";
import { ChakraProvider, Box, Text } from "@chakra-ui/react";
// import { Button, Input } from "Components";

const App = () => {
  // const [url, setUrl] = React.useState("");
  // const [changedUrl, setChangedUrl] = React.useState("");
  // const [showVideo, setShowVideo] = React.useState(false);

  // React.useEffect(() => {
  //   setShowVideo(changedUrl !== "");
  // }, [changedUrl]);
  return (
    <ChakraProvider>
      <Box p={9} height="100vh">
        <Text
          display="flex"
          alignItems="center"
          fontWeight="extrabold"
          fontSize="28px"
          color="#ffffff"
          fontFamily="Nunito"
        >
          Скоро здесь будет самый лучший сайт
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ marginLeft: 10 }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </Text>
      </Box>
      {/* <Box m={4}>
        <Text>Вставьте ссылку на видео</Text>
        <form>
          <Input
            type="text"
            value={url}
            onInput={(e) => setUrl(e.target.value)}
          />
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              // https://www.youtube.com/watch?v=-VVrlKjfqSc
              // https://www.youtube.com./embed/-VVrlKjfqSc
              setChangedUrl([...url.split("v=")][1]);
            }}
          >
            Найти
          </Button>
        </form>
      </Box>
      <Box m={4}>
        {showVideo && (
          <iframe
            title="Youtube video"
            width="640"
            height="360"
            src={`https://www.youtube.com./embed/${changedUrl}`}
            frameborder="0"
            allowfullscreen
          ></iframe>
        )}
      </Box> */}
    </ChakraProvider>
  );
};

export default App;
