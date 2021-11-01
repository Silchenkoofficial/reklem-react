import React from "react";
import { ChakraProvider, Box, Text, Input, Button } from "@chakra-ui/react";
// import { Button, Input } from "Components";

const App = () => {
  const [url, setUrl] = React.useState("");
  const [changedUrl, setChangedUrl] = React.useState("");
  const [showVideo, setShowVideo] = React.useState(false);

  React.useEffect(() => {
    setShowVideo(changedUrl !== "");
  }, [changedUrl]);
  return (
    <ChakraProvider>
      <Box m={4}>
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
      </Box>
    </ChakraProvider>
  );
};

export default App;
