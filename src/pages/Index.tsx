import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'fashion' | 'photo'>('all');

  const portfolioItems = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/522ab34a-cdd2-46cf-bb0c-d864a571bccf/files/7416c4bd-5269-4063-b4c8-65a324d1b0ff.jpg',
      title: 'Вечернее платье',
      category: 'fashion',
      description: 'Авторское платье с уникальным кроем'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/522ab34a-cdd2-46cf-bb0c-d864a571bccf/files/ece20163-86a5-48e8-ad87-216672509167.jpg',
      title: 'Коллекция haute couture',
      category: 'fashion',
      description: 'Элегантность в каждой детали'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/522ab34a-cdd2-46cf-bb0c-d864a571bccf/files/baf0e0cb-9429-4755-a438-33b587b3c070.jpg',
      title: 'Свадебное платье',
      category: 'fashion',
      description: 'Романтичный дизайн с кружевом'
    },
    {
      id: 4,
      image: 'https://cdn.poehali.dev/projects/522ab34a-cdd2-46cf-bb0c-d864a571bccf/files/fb64ed08-f268-4eee-b6bf-1eceacef0d6d.jpg',
      title: 'Коктейльное платье',
      category: 'fashion',
      description: 'Современный геометрический крой'
    },
    {
      id: 5,
      image: 'https://cdn.poehali.dev/projects/522ab34a-cdd2-46cf-bb0c-d864a571bccf/files/ca07316c-6d6a-4529-8e25-3ef010a33214.jpg',
      title: 'Бальное платье',
      category: 'fashion',
      description: 'Роскошная драпировка ткани'
    },
    {
      id: 6,
      image: 'https://cdn.poehali.dev/projects/522ab34a-cdd2-46cf-bb0c-d864a571bccf/files/2616a03f-a6c2-4726-9e50-fde1cf012454.jpg',
      title: 'Улыбка и радость',
      category: 'photo',
      description: 'Настоящие эмоции счастья'
    }
  ];

  const services = [
    {
      icon: 'Scissors',
      title: 'Конструктор одежды',
      description: 'Создание уникальных моделей одежды от эскиза до готового изделия. Индивидуальный подход к каждому клиенту.',
      features: ['Авторские эскизы', 'Пошив на заказ', 'Подбор тканей', 'Примерки']
    },
    {
      icon: 'Camera',
      title: 'Фотограф',
      description: 'Профессиональная съёмка с акцентом на эмоции и естественность. Портреты, fashion и lifestyle фотография.',
      features: ['Fashion-съёмка', 'Портреты', 'Lookbook', 'Репортажи']
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <div className="min-h-screen bg-background">
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-7xl md:text-9xl font-light mb-6 animate-fade-in tracking-tight">
            Лаврик Татьяна
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-scale-in font-light tracking-wide">
            Конструктор одежды & Фотограф
          </p>
          <div className="flex gap-4 justify-center animate-slide-up">
            <Button 
              size="lg" 
              className="rounded-full px-8 font-medium"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Мои услуги
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="rounded-full px-8 font-medium"
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Портфолио
            </Button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section id="services" className="py-24 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-16 tracking-tight">
            Услуги
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="p-8 hover:scale-105 transition-transform duration-300 bg-card border-primary/20"
              >
                <div className="mb-6 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-3xl font-light mb-4 text-center">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-12 tracking-tight">
            Портфолио
          </h2>
          
          <div className="flex justify-center gap-4 mb-12">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('all')}
              className="rounded-full"
            >
              Всё
            </Button>
            <Button
              variant={selectedCategory === 'fashion' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('fashion')}
              className="rounded-full"
            >
              Одежда
            </Button>
            <Button
              variant={selectedCategory === 'photo' ? 'default' : 'outline'}
              onClick={() => setSelectedCategory('photo')}
              className="rounded-full"
            >
              Фото
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {filteredItems.map((item) => (
              <Card 
                key={item.id} 
                className="group overflow-hidden cursor-pointer border-primary/20 bg-card"
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div>
                      <h3 className="text-2xl font-light mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-5xl md:text-6xl font-light mb-8 tracking-tight">
            Начнём сотрудничество?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Свяжитесь со мной для обсуждения вашего проекта. Создадим что-то уникальное вместе.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="rounded-full px-8">
              <Icon name="Mail" size={20} className="mr-2" />
              Написать
            </Button>
            <Button size="lg" variant="outline" className="rounded-full px-8">
              <Icon name="Instagram" size={20} className="mr-2" />
              Instagram
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © 2024 Лаврик Татьяна. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;