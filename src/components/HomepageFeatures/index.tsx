import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Engage',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        We bring tech enthuasists together to build meaningful connections and inspire collaboration.
      </>
    ),
  },
  {
    title: 'Empower',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
       We equip individuals with the skills, resources, and confidence to turn their ideas into impactful creations.
      </>
    ),
  },
  {
    title: 'Innovate',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We foster creativity and bold ideas to drive impactful and forward-thinking solutions.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
