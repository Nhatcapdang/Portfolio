/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { Group, Text, Avatar, Box, Stack } from '@mantine/core';
import Image from 'next/image';
import { Avatar2 } from 'public/asset/Photos';

const Card3D = ({ avatar, photo, qoue, name, job }) => {
  const itemRef = useRef(null);
  const [first, setfirst] = useState(false);
  useEffect(() => {
    const item = itemRef.current;
    const innerCard = item.querySelector('.inner-card');
    const innerCardBackface = item.querySelector('.inner-card-backface');
    const glare = item.querySelector('.glare');

    const calculateAngle = (e) => {
      let dropShadowColor = `rgba(0, 0, 0, 0.3)`;
      if (item.getAttribute('data-filter-color') !== null) {
        dropShadowColor = item.getAttribute('data-filter-color');
      }

      item.classList.add('animated');
      // Get the x position of the users mouse, relative to the button itself
      let x = Math.abs(innerCard.getBoundingClientRect().x - e.clientX);
      // Get the y position relative to the button
      let y = Math.abs(innerCard.getBoundingClientRect().y - e.clientY);

      // Calculate half the width and height
      let halfWidth = innerCard.getBoundingClientRect().width / 2;
      let halfHeight = innerCard.getBoundingClientRect().height / 2;

      // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
      // Changing these numbers will change the depth of the effect.
      let calcAngleX = (x - halfWidth) / 6;
      let calcAngleY = (y - halfHeight) / 14;

      let gX = (1 - x / (halfWidth * 2)) * 100;
      let gY = (1 - y / (halfHeight * 2)) * 100;

      // Add the glare at the reflection of where the user's mouse is hovering
      glare.style.background = `radial-gradient(circle at ${gX}% ${gY}%, rgb(199 198 243), transparent)`;
      // And set its container's perspective.
      item.style.perspective = `${halfWidth * 6}px`;

      // Set the items transform CSS property
      innerCard.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.0)`;
      innerCardBackface.style.transform = `rotateY(${calcAngleX}deg) rotateX(${-calcAngleY}deg) scale(1.04) translateZ(-4px)`;

      if (item.getAttribute('data-custom-perspective') !== null) {
        item.style.perspective = `${item.getAttribute('data-custom-perspective')}`;
      }

      // Reapply this to the shadow, with different dividers
      let calcShadowX = (x - halfWidth) / 3;
      let calcShadowY = (y - halfHeight) / 6;

      // Add a filter shadow - this is more performant to animate than a regular box shadow.
      innerCard.style.filter = `drop-shadow(${-calcShadowX}px ${-calcShadowY}px 15px ${dropShadowColor})`;
    };

    const handleMouseEnter = (e) => {
      calculateAngle(e);
    };

    const handleMouseMove = (e) => {
      calculateAngle(e);
    };

    const handleMouseLeave = () => {
      let dropShadowColor = `rgba(0, 0, 0, 0.3)`;
      if (item.getAttribute('data-filter-color') !== null) {
        dropShadowColor = item.getAttribute('data-filter-color');
      }
      item.classList.remove('animated');
      innerCard.style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
      innerCardBackface.style.transform = `rotateY(0deg) rotateX(0deg) scale(1.0) translateZ(-4px)`;
      innerCard.style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
    };

    // flip.addEventListener('click', handleFlip);
    // unflip.addEventListener('click', handleUnflip);
    item.addEventListener('mouseenter', handleMouseEnter);
    item.addEventListener('mousemove', handleMouseMove);
    item.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      // flip.removeEventListener('click', handleFlip);
      // unflip.removeEventListener('click', handleUnflip);
      item.removeEventListener('mouseenter', handleMouseEnter);
      item.removeEventListener('mousemove', handleMouseMove);
      item.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);
  const handleFlip = () => {
    setfirst((val) => !val);
  };

  return (
    <div
      onClick={handleFlip}
      ref={itemRef}
      className={first ? 'flipped card blastoise' : 'card blastoise'}
    >
      <span className="inner-card-backface">
        <span className="image">
          <Image
            src={photo}
            alt="blastoise"
            fill="blur"
            style={{
              objectFit: 'cover',
              borderRadius: '10px',
            }}
          />
        </span>
      </span>
      <span className="inner-card">
        <span className="glare"></span>
        <Stack justify="space-evenly" h="100%">
          <Text size={48} weight={900}>
            "
          </Text>
          <Text size={18}>{qoue}</Text>
          <Group position="apart">
            <Box>
              <Text size={16} weight={500}>
                <Text component="span" color="hsl(342, 92%, 46%)">
                  @{' '}
                </Text>
                {name}
              </Text>
              <Text size={12}>{job}</Text>
            </Box>
            <Avatar href={avatar.src} src={avatar.src} alt="it's me" size={50} radius="100%" />
          </Group>
        </Stack>
      </span>
    </div>
  );
};

export default Card3D;
