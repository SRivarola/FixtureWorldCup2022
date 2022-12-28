const matches = [
    {
        stadium: 'Al Bayt Stadium',
        date: '20/11',
        hour: '19:00',
        player1: 'QAT',
        player2: 'ECU',
        color: {
            bg: 'bg-groupA',
            tx: 'text-groupA'
        },
        group: 'A'
    },
    {
        stadium: 'Khalifa International Stadium',
        date: '21/11',
        hour: '16:00',
        player1: 'ENG',
        player2: 'IRN',
        color: {
            bg: 'bg-groupB',
            tx: 'text-groupB'
        },
        group: 'B'
    },
    {
        stadium: 'Al Thumana Stadium',
        date: '21/11',
        hour: '19:00',
        player1: 'SEN',
        player2: 'NED',
        color: {
            bg: 'bg-groupA',
            tx: 'text-groupA'
        },
        group: 'A'
    },
    {
        stadium: 'Ahmad Bin Ali Stadium',
        date: '21/11',
        hour: '22:00',
        player1: 'USA',
        player2: 'WAL',
        color: {
            bg: 'bg-groupB',
            tx: 'text-groupB'
        },
        group: 'B'
    },
    {
        stadium: 'Lusail Stadium',
        date: '22/11',
        hour: '13:00',
        player1: 'ARG',
        player2: 'KSA',
        color: {
            bg: 'bg-groupC',
            tx: 'text-groupC'
        },
        group: 'C'
    },
    {
        stadium: 'Education City Stadium',
        date: '22/11',
        hour: '16:00',
        player1: 'DEN',
        player2: 'TUN',
        color: {
            bg: 'bg-groupD',
            tx: 'text-groupD'
        },
        group: 'D'
    },
    {
        stadium: 'Stadium 974',
        date: '22/11',
        hour: '19:00',
        player1: 'MEX',
        player2: 'POL',
        color: {
            bg: 'bg-groupC',
            tx: 'text-groupC'
        },
        group: 'C'
    },
    {
        stadium: 'Al Janoub Stadium',
        date: '22/11',
        hour: '22:00',
        player1: 'FRA',
        player2: 'AUS',
        color: {
            bg: 'bg-groupD',
            tx: 'text-groupD'
        },
        group: 'D'
    },
    {
        stadium: 'Al Bayt Stadium',
        date: '23/11',
        hour: '13:00',
        player1: 'MAR',
        player2: 'CRO',
        color: {
            bg: 'bg-groupF',
            tx: 'text-groupF'
        },
        group: 'F'
    },
    {
        stadium: 'Kkalifa International Stadium',
        date: '23/11',
        hour: '16:00',
        player1: 'GER',
        player2: 'JPN',
        color: {
            bg: 'bg-groupE',
            tx: 'text-groupE'
        },
        group: 'E'
    },
    {
        stadium: 'Al Thumama Stadium',
        date: '23/11',
        hour: '19:00',
        player1: 'ESP',
        player2: 'CRC',
        color: {
            bg: 'bg-groupE',
            tx: 'text-groupE'
        },
        group: 'E'
    },
    {
        stadium: 'Ahmad Bin Ali Stadium',
        date: '23/11',
        hour: '22:00',
        player1: 'BEL',
        player2: 'CAN',
        color: {
            bg: 'bg-groupF',
            tx: 'text-groupF'
        },
        group: 'F'
    },
    {
        stadium: 'Al Janoub Stadium',
        date: '24/11',
        hour: '13:00',
        player1: 'SUI',
        player2: 'CMR',
        color: {
            bg: 'bg-groupG',
            tx: 'text-groupG'
        },
        group: 'G'
    },
    {
        stadium: 'Education City Stadium',
        date: '24/11',
        hour: '16:00',
        player1: 'URU',
        player2: 'KOR',
        color: {
            bg: 'bg-groupH',
            tx: 'text-groupH'
        },
        group: 'H'
    },
    {
        stadium: 'Stadium 974',
        date: '24/11',
        hour: '19:00',
        player1: 'POR',
        player2: 'GHA',
        color: {
            bg: 'bg-groupH',
            tx: 'text-groupH'
        },
        group: 'H'
    },
    {
        stadium: 'Lusail Stadium',
        date: '24/11',
        hour: '22:00',
        player1: 'BRA',
        player2: 'SRB',
        color: {
            bg: 'bg-groupG',
            tx: 'text-groupG'
        },
        group: 'G'
    },
    {
        stadium: 'Ahmad Bin Ali Stadium',
        date: '25/11',
        hour: '13:00',
        player1: 'WAL',
        player2: 'IRN',
        color: {
            bg: 'bg-groupB',
            tx: 'text-groupB'
        },
        group: 'B'
    },
    {
        stadium: 'Al Thumama Stadium',
        date: '25/11',
        hour: '16:00',
        player1: 'QAT',
        player2: 'SEN',
        color: {
            bg: 'bg-groupA',
            tx: 'text-groupA'
        },
        group: 'A'
    },
    {
        stadium: 'Khalifa International Stadium',
        date: '25/11',
        hour: '19:00',
        player1: 'NED',
        player2: 'ECU',
        color: {
            bg: 'bg-groupA',
            tx: 'text-groupA'
        },
        group: 'A'
    },
    {
        stadium: 'Al Bayt Stadium',
        date: '25/11',
        hour: '22:00',
        player1: 'ENG',
        player2: 'USA',
        color: {
            bg: 'bg-groupB',
            tx: 'text-groupB'
        },
        group: 'B'
    },
    {
        stadium: 'Al Janoub Stadium',
        date: '26/11',
        hour: '13:00',
        player1: 'TUN',
        player2: 'AUS',
        color: {
            bg: 'bg-groupD',
            tx: 'text-groupD'
        },
        group: 'D'
    },
    {
        stadium: 'Education City Stadium',
        date: '26/11',
        hour: '16:00',
        player1: 'POL',
        player2: 'KSA',
        color: {
            bg: 'bg-groupC',
            tx: 'text-groupC'
        },
        group: 'C'
    },
    {
        stadium: 'Stadium 974',
        date: '26/11',
        hour: '19:00',
        player1: 'FRA',
        player2: 'DEN',
        color: {
            bg: 'bg-groupD',
            tx: 'text-groupD'
        },
        group: 'D'
    },
    {
        stadium: 'Lusail Stadium',
        date: '26/11',
        hour: '22:00',
        player1: 'ARG',
        player2: 'MEX',
        color: {
            bg: 'bg-groupC',
            tx: 'text-groupC'
        },
        group: 'C'
    },
    {
        stadium: 'Ahmad Bin Ali Stadium',
        date: '27/11',
        hour: '13:00',
        player1: 'JPN',
        player2: 'CRC',
        color: {
            bg: 'bg-groupE',
            tx: 'text-groupE'
        },
        group: 'E'
    },
    {
        stadium: 'Al Thumama Stadium',
        date: '27/11',
        hour: '16:00',
        player1: 'BEL',
        player2: 'MAR',
        color: {
            bg: 'bg-groupF',
            tx: 'text-groupF'
        },
        group: 'F'
    },
    {
        stadium: 'Khalifa International Stadium',
        date: '27/11',
        hour: '19:00',
        player1: 'CRO',
        player2: 'CAN',
        color: {
            bg: 'bg-groupF',
            tx: 'text-groupF'
        },
        group: 'F'
    },
    {
        stadium: 'Al Bayt Stadium',
        date: '27/11',
        hour: '22:00',
        player1: 'ESP',
        player2: 'GER',
        color: {
            bg: 'bg-groupE',
            tx: 'text-groupE'
        },
        group: 'E'
    },
    {
        stadium: 'Al Janoub Stadium',
        date: '28/11',
        hour: '13:00',
        player1: 'CMR',
        player2: 'SRB',
        color: {
            bg: 'bg-groupG',
            tx: 'text-groupG'
        },
        group: 'G'
    },
    {
        stadium: 'Education City Stadium',
        date: '28/11',
        hour: '16:00',
        player1: 'KOR',
        player2: 'GHA',
        color: {
            bg: 'bg-groupH',
            tx: 'text-groupH'
        },
        group: 'H'
    },
    {
        stadium: 'Stadium 974',
        date: '28/11',
        hour: '19:00',
        player1: 'BRA',
        player2: 'SUI',
        color: {
            bg: 'bg-groupG',
            tx: 'text-groupG'
        },
        group: 'G'
    },
    {
        stadium: 'Lusail Stadium',
        date: '28/11',
        hour: '22:00',
        player1: 'POR',
        player2: 'URU',
        color: {
            bg: 'bg-groupH',
            tx: 'text-groupH'
        },
        group: 'H'
    },
    {
        stadium: 'Khalifa International Stadium',
        date: '29/11',
        hour: '18:00',
        player1: 'ECU',
        player2: 'SEN',
        color: {
            bg: 'bg-groupA',
            tx: 'text-groupA'
        },
        group: 'A'
    },
    {
        stadium: 'Al Bayt Stadium',
        date: '29/11',
        hour: '18:00',
        player1: 'NED',
        player2: 'QAT',
        color: {
            bg: 'bg-groupA',
            tx: 'text-groupA'
        },
        group: 'A'
    },
    {
        stadium: 'Ahmad Bin Ali Stadium',
        date: '29/11',
        hour: '22:00',
        player1: 'WAL',
        player2: 'ENG',
        color: {
            bg: 'bg-groupB',
            tx: 'text-groupB'
        },
        group: 'B'
    },
    {
        stadium: 'Al Thumama Stadium',
        date: '29/11',
        hour: '22:00',
        player1: 'IRN',
        player2: 'USA',
        color: {
            bg: 'bg-groupB',
            tx: 'text-groupB'
        },
        group: 'B'
    },
    {
        stadium: 'Al Janoub Stadium',
        date: '30/11',
        hour: '18:00',
        player1: 'AUS',
        player2: 'DEN',
        color: {
            bg: 'bg-groupD',
            tx: 'text-groupD'
        },
        group: 'D'
    },
    {
        stadium: 'Education City Stadium',
        date: '30/11',
        hour: '18:00',
        player1: 'TUN',
        player2: 'FRA',
        color: {
            bg: 'bg-groupD',
            tx: 'text-groupD'
        },
        group: 'D'
    },
    {
        stadium: 'Stadium 974',
        date: '30/11',
        hour: '22:00',
        player1: 'POL',
        player2: 'ARG',
        color: {
            bg: 'bg-groupC',
            tx: 'text-groupC'
        },
        group: 'C'
    },
    {
        stadium: 'Lusail Stadium',
        date: '30/11',
        hour: '22:00',
        player1: 'KSA',
        player2: 'MEX',
        color: {
            bg: 'bg-groupC',
            tx: 'text-groupC'
        },
        group: 'C'
    },
    {
        stadium: 'Ahmad Bin Ali Stadium',
        date: '01/12',
        hour: '18:00',
        player1: 'CRO',
        player2: 'BEL',
        color: {
            bg: 'bg-groupF',
            tx: 'text-groupF'
        },
        group: 'F'
    },
    {
        stadium: 'Al Thumama Stadium',
        date: '01/12',
        hour: '18:00',
        player1: 'CAN',
        player2: 'MAR',
        color: {
            bg: 'bg-groupF',
            tx: 'text-groupF'
        },
        group: 'F'
    },
    {
        stadium: 'Khalifa International Stadium',
        date: '01/12',
        hour: '22:00',
        player1: 'JPN',
        player2: 'ESP',
        color: {
            bg: 'bg-groupE',
            tx: 'text-groupE'
        },
        group: 'E'
    },
    {
        stadium: 'Al Bayt Stadium',
        date: '01/12',
        hour: '22:00',
        player1: 'CRC',
        player2: 'GER',
        color: {
            bg: 'bg-groupE',
            tx: 'text-groupE'
        },
        group: 'E'
    },
    {
        stadium: 'Al Janoub Stadium',
        date: '02/12',
        hour: '18:00',
        player1: 'GHA',
        player2: 'URU',
        color: {
            bg: 'bg-groupH',
            tx: 'text-groupH'
        },
        group: 'H'
    },
    {
        stadium: 'Education City Stadium',
        date: '02/12',
        hour: '18:00',
        player1: 'KOR',
        player2: 'POR',
        color: {
            bg: 'bg-groupH',
            tx: 'text-groupH'
        },
        group: 'H'
    },
    {
        stadium: 'Stadium 974',
        date: '02/12',
        hour: '22:00',
        player1: 'SRB',
        player2: 'SUI',
        color: {
            bg: 'bg-groupG',
            tx: 'text-groupG'
        },
        group: 'G'
    },
    {
        stadium: 'Lusail Stadium',
        date: '02/12',
        hour: '22:00',
        player1: 'CMR',
        player2: 'BRA',
        color: {
            bg: 'bg-groupG',
            tx: 'text-groupG'
        },
        group: 'G'
    },
]

export { matches }