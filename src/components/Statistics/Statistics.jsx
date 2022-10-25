import PropTypes from 'prop-types';
import { StatisticCard, StatisticList,StatisticTitle, StatisticItem  } from './Statistics.styled';


const Statistics = ({title, stats}) => {
  return  <StatisticCard>
  <StatisticTitle>{title && title}</StatisticTitle>

    <StatisticList>
      {stats.map(({id, label, percentage}) => (
        <StatisticItem key={id } >
           <span >{ label}</span>
           <span >{ percentage}%</span>
        </StatisticItem>
      ))}
    </StatisticList>
    
</StatisticCard>
  
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired
}


export default Statistics;