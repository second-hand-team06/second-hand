import React from 'react';

import { ReactComponent as ArrowUp } from '@assets/arrowUp.svg';
import { ReactComponent as Camera } from '@assets/camera.svg';
import { ReactComponent as ChevronDown } from '@assets/chevronDown.svg';
import { ReactComponent as ChevronLeft } from '@assets/chevronLeft.svg';
import { ReactComponent as CircleFill } from '@assets/circleFill.svg';
import { ReactComponent as Ellipsis } from '@assets/ellipsis.svg';
import { ReactComponent as Hamburger } from '@assets/hamburger.svg';
import { ReactComponent as Home } from '@assets/home.svg';
import { ReactComponent as Keyboard } from '@assets/keyboard.svg';
import { ReactComponent as Like } from '@assets/like.svg';
import { ReactComponent as Message } from '@assets/message.svg';
import { ReactComponent as Multiply } from '@assets/multiply.svg';
import { ReactComponent as Newspaper } from '@assets/newspaper.svg';
import { ReactComponent as Person } from '@assets/person.svg';
import { ReactComponent as Plus } from '@assets/plus.svg';
import { ReactComponent as Search } from '@assets/search.svg';

interface IconProps {
  name: string;
  fill?: string;
}

const ICONS: Record<string, React.FunctionComponent<React.SVGProps<SVGSVGElement>>> = {
  arrowup: ArrowUp,
  camera: Camera,
  chevrondown: ChevronDown,
  chevronleft: ChevronLeft,
  circlefill: CircleFill,
  ellipsis: Ellipsis,
  hamburger: Hamburger,
  home: Home,
  keyboard: Keyboard,
  like: Like,
  message: Message,
  multiply: Multiply,
  newspaper: Newspaper,
  person: Person,
  plus: Plus,
  search: Search,
};

const Icon = ({ name, fill }: IconProps) => {
  const iconName = name.toLowerCase();
  const IconComponent = ICONS[iconName];

  if (IconComponent) {
    return <IconComponent fill={fill} />;
  }

  return null;
};

export default Icon;
