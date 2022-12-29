import { Stack, Card, Flex, Text } from '@sanity/ui';
import styled from 'styled-components';


// Adds markup and invokes renderDefault()
function enhancedNavbar(props) {
  
  const Button = styled.a`
    background-color: #000;
    color: #fff;
    display: inline-block;
    padding: 5px 20px;
    text-decoration: none;
    transition: all 0.5s ease;

    &:hover {
      background-color: #ccc;
      color: #666
    }
  `;

  return (
    <Stack>
      <Card padding={3} tone="normal">
        <Flex justify="left">
          <Button href="https://ruhrpott.netlify.app">Return to Website</Button>
        </Flex>
      </Card>
      <>{props.renderDefault(props)}</>
    </Stack>
  )
}

export default enhancedNavbar;