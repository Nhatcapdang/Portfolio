/** @format */

import React, { useEffect, useRef, useState } from 'react';
import { Group, Text, Avatar, Box, Stack } from '@mantine/core';
import Image from 'next/image';

const Card3D = () => {
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
            src="https://instagram.fsgn8-2.fna.fbcdn.net/v/t51.2885-15/288137252_721335082470336_6724268665874424577_n.jpg?stp=c0.180.1440.1440a_dst-jpg_e35_s480x480&_nc_ht=instagram.fsgn8-2.fna.fbcdn.net&_nc_cat=100&_nc_ohc=IauJaIG4eJsAX-pNf84&edm=AOQ1c0wBAAAA&ccb=7-5&oh=00_AfCwFIKTjLVwEn43gp89vjEe4jP2kh7ixMML5Viidqnd4Q&oe=64948693&_nc_sid=f70a57"
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
          <Text size={18}>
            I thought it was impossible to make a website as beautiful as our product, but Hasan
            proved me wrong.Hasan, made a great website for us. Thanks, Hasan.
          </Text>
          <Group position="apart">
            <Box>
              <Text size={16} weight={500}>
                <Text component="span" color="hsl(342, 92%, 46%)">
                  @{' '}
                </Text>
                Nhat Cap Dang
              </Text>
              <Text size={12}>CFO of Me</Text>
            </Box>
            <Avatar
              href="https://instagram.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/344577723_1216481862389666_3909614869372940114_n.jpg?stp=c0.256.1536.1536a_dst-jpg_e15_s480x480&_nc_ht=instagram.fsgn13-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=o3-CLAa-53IAX8qUtEy&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDk2irzvW-D279gfD6UIgpEkLSLCmbUXeJtgjvmch_YzQ&oe=64945711&_nc_sid=f70a57"
              src="https://instagram.fsgn13-3.fna.fbcdn.net/v/t39.30808-6/344577723_1216481862389666_3909614869372940114_n.jpg?stp=c0.256.1536.1536a_dst-jpg_e15_s480x480&_nc_ht=instagram.fsgn13-3.fna.fbcdn.net&_nc_cat=102&_nc_ohc=o3-CLAa-53IAX8qUtEy&edm=AOQ1c0wAAAAA&ccb=7-5&oh=00_AfDk2irzvW-D279gfD6UIgpEkLSLCmbUXeJtgjvmch_YzQ&oe=64945711&_nc_sid=f70a57"
              alt="it's me"
              size={50}
              radius="100%"
            />
          </Group>
        </Stack>
      </span>
    </div>
  );
};

export default Card3D;
