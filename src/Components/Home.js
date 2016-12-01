import React from 'react';
import { Banner, Heading, Card, CardImage, Text } from 'rebass';
import projects from '../data/proj-data';

console.log(projects);

export default () => (
  <div>
    <div className="banner">
      <Heading
        level={1}
        size={0}
      >
        Claire Dranginis
      </Heading>
      <Heading
        level={1}
        size={0}
        alt={true}
      >
        Software Engineer
      </Heading>
    </div>
    {
      projects.map(proj => (
        <Card
          rounded
          width={256}
        >
          <CardImage src="http://placehold.it/320/08e/fff" />
          <Heading
            level={2}
            size={3}
          >
            Card
          </Heading>
          <Text>
            Cats like cards too
          </Text>
        </Card>
      ))
    }
  </div>
);
