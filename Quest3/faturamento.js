const fs = require('fs');
fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error('Erro ao ler o arquivo: ', err);
        return;
    }

    const faturamentoMensal = JSON.parse(data);

    function calcularFaturamento(faturamento) {
        const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);
    
        const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
        const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

        const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
        const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

        const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;

        console.log(`Menor faturamento: ${menorFaturamento}` );
        console.log(`Maior faturamento: ${maiorFaturamento}` );
        console.log(`Média de faturamento: ${mediaFaturamento.toFixed(2)}` );
        console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}` );
    }
    
    calcularFaturamento(faturamentoMensal);
});
        