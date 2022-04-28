import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';

const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Cost = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Стоимость 420 000 тенге'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
    
          <p className="center-content">Плюшки по завершению курса:</p>
          <div className={tilesClasses}>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              
                  <p className="text-sm mb-0">
                  <span className="testimonial-item-name text-color-high">Реальные кейсы<br></br>рассмотрим микросервисы необходимые в работе в финансовой сфере Казахстана</span>
                  </p>
              </div>
            </div>

            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              
                  <p className="text-sm mb-0">
                  <span className="testimonial-item-name text-color-high">Переработка резюме <br></br> Сократим объем, акцентируем на навыках, которые будут полезны в it сфере</span>
                  </p>
              </div>
            </div>
            <div className="tiles-item reveal-from-bottom">
              <div className="tiles-item-inner">
              
                  <p className="text-sm mb-0">
                  <span className="testimonial-item-name text-color-high">Стажировка<br></br> ученика с высокой успеваемостью возможна стажировка в компаниях с трудоустройством при успешном прохождении coding interview в Казахстанских компаниях</span>
                  </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

Cost.propTypes = propTypes;
Cost.defaultProps = defaultProps;

export default Cost;