"use client";

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

export const supportDistributionData = [
  { label: "Projetos Open Source", percentage: 31.8, color: "#FF8C55" },
  { label: "Mentorias", percentage: 27.3, color: "#7EB6FF" },
  { label: "Eventos e comunidade", percentage: 22.7, color: "#4ADE80" },
  { label: "Infraestrutura", percentage: 18.2, color: "#FACC15" },
];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text 
      x={x} 
      y={y} 
      fill="#000000" 
      textAnchor="middle" 
      dominantBaseline="central" 
      fontSize={12} 
      fontWeight="600"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

export default function SupportDifferenceSection() {
  return (
    <section id="como-apoiar" className="section-reveal w-full bg-gradient-to-b from-[#0E14BF] to-[#6366F1] py-16 lg:py-24 px-6 lg:px-12" aria-label="Como o seu apoio faz a diferença">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Coluna Esquerda - Texto e CTA */}
        <div className="w-full lg:w-[45%] flex flex-col gap-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Como o seu apoio faz <br className="hidden lg:block"/> a diferença?
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
            Toda contribuição é direcionada para manter e fortalecer nossas iniciativas. Você ajuda a tornar possíveis novas mentorias, projetos, oportunidades e ações para a comunidade.
          </p>
          <div>
            <a 
              href="https://apoia.se/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-[#FACC15] hover:bg-[#EAB308] text-black font-bold text-lg py-4 px-10 rounded-2xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:ring-4 focus:ring-yellow-400/50 outline-none"
            >
              Apoie no Apoia.se
            </a>
          </div>
        </div>

        {/* Coluna Direita - Card com Gráfico */}
        <div className="w-full lg:w-[55%]">
          <div className="bg-[#3B82F6] rounded-3xl p-8 lg:p-10 shadow-2xl flex flex-col items-center w-full max-w-lg mx-auto lg:ml-auto">
            <h3 className="text-white text-xl lg:text-2xl font-bold mb-8 text-center">
              Seu apoio é investido em:
            </h3>
            
            {/* Gráfico de Rosca */}
            <div 
              className="w-full h-[280px] lg:h-[320px] mb-8" 
              aria-label="Gráfico mostrando a distribuição do investimento: 31.8% Projetos Open Source, 27.3% Mentorias, 22.7% Eventos e comunidade, 18.2% Infraestrutura"
            >
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={supportDistributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius="45%"
                    outerRadius="85%"
                    dataKey="percentage"
                    stroke="#3B82F6"
                    strokeWidth={3}
                    labelLine={false}
                    label={renderCustomizedLabel}
                  >
                    {supportDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: any) => [`${value}%`, '']}
                    itemStyle={{ fontWeight: 'bold' }}
                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Legendas */}
            <div className="w-full flex flex-col gap-2 px-2 lg:px-4 mt-2">
              <div className="text-white text-lg lg:text-xl font-medium tracking-wide">Mentorias</div>
              <div className="text-white text-lg lg:text-xl font-medium tracking-wide">Projetos Open Source</div>
              <div className="text-white text-lg lg:text-xl font-medium tracking-wide">Eventos e comunidade</div>
              <div className="text-white text-lg lg:text-xl font-medium tracking-wide">Infraestrutura</div>
              <div className="text-white text-lg lg:text-xl font-medium tracking-wide">Outras iniciativas</div>
            </div>
            
          </div>
        </div>

      </div>
    </section>
  );
}
