import PropTypes from 'prop-types';
import { StatisticCard, StatisticList,StatisticTitle, StatisticItem  } from './Statistics.styled';


const Statistics = ({title, stats}) => {
  return  <StatisticCard>
  <StatisticTitle>{title}</StatisticTitle>

    <StatisticList>
      {stats.map(stat => (
        <StatisticItem key={stat.id } >
           <span >{ stat.label}</span>
           <span >{ stat.percentage}%</span>
        </StatisticItem>
      ))}
    </StatisticList>
    
</StatisticCard>
  
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  }))
}


export default Statistics;