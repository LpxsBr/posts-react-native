import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, FlatList, Linking, StyleSheet, Text, TextInput, TextInputBase, TextInputComponent, View } from 'react-native';
import Publication from './components/Publication';

const config = {
  title: 'The app',
  posts: [
    {
      id: 1,
      title: "A Revolução da Inteligência Artificial",
      fulltext: "A inteligência artificial está transformando rapidamente a maneira como interagimos com a tecnologia. Desde assistentes virtuais até carros autônomos, explore como a IA está moldando o futuro.",
      available: true
    },
    {
      id: 2,
      title: "Blockchain: Além das Criptomoedas",
      fulltext: "O blockchain vai além das criptomoedas. Descubra como essa tecnologia revolucionária está sendo aplicada em setores como saúde, finanças e logística, promovendo transparência e segurança.",
      available: true
    },
    {
      id: 3,
      title: "Realidade Aumentada: Transformando a Experiência do Usuário",
      fulltext: "A realidade aumentada está proporcionando experiências imersivas em setores como jogos, varejo e educação. Saiba como essa tecnologia está moldando o futuro da interação digital.",
      available: true
    },
    {
      id: 4,
      title: "5G: A Próxima Geração de Conectividade",
      fulltext: "Com velocidades de download ultrarrápidas e latência mínima, o 5G está redefinindo a conectividade. Explore as aplicações potenciais e o impacto dessa tecnologia na comunicação.",
      available: true
    },
    {
      id: 5,
      title: "A Ascensão dos Drones Inteligentes",
      fulltext: "Os drones inteligentes estão sendo usados em diversos setores, desde entregas até monitoramento agrícola. Descubra como essas pequenas aeronaves estão revolucionando a maneira como realizamos tarefas cotidianas.",
      available: true
    },
    {
      id: 6,
      title: "Cibersegurança em um Mundo Digital",
      fulltext: "Com o aumento das ameaças cibernéticas, a cibersegurança tornou-se crucial. Explore as últimas tendências e práticas para proteger dados e sistemas contra ataques maliciosos.",
      available: true
    },
    {
      id: 7,
      title: "A Evolução dos Dispositivos Vestíveis",
      fulltext: "Dos smartwatches aos óculos inteligentes, os dispositivos vestíveis estão se tornando parte integrante de nossas vidas. Descubra como esses gadgets estão mudando a forma como interagimos com a tecnologia.",
      available: true
    },
    {
      id: 8,
      title: "A Promessa da Computação Quântica",
      fulltext: "A computação quântica promete revolucionar a capacidade de processamento. Explore os fundamentos dessa tecnologia e as possíveis aplicações que podem transformar a computação tradicional.",
      available: true
    },
    {
      id: 9,
      title: "IoT: Conectando o Mundo Físico ao Digital",
      fulltext: "A Internet das Coisas (IoT) está transformando objetos comuns em dispositivos inteligentes interconectados. Saiba como essa revolução tecnológica está impactando nossas casas, cidades e indústrias.",
      available: true
    },
    {
      id: 10,
      title: "A Era da Impressão 3D",
      fulltext: "A impressão 3D está possibilitando a criação de objetos complexos de maneira inovadora. Explore as aplicações desde a medicina até a indústria e como essa tecnologia está transformando processos de fabricação.",
      available: true
    },
    {
      id: 11,
      title: "A Influência da Tecnologia na Educação",
      fulltext: "A tecnologia está remodelando a educação, desde a sala de aula até a aprendizagem online. Descubra como ferramentas digitais e plataformas interativas estão impactando positivamente o processo educacional.",
      available: true
    },
    {
      id: 12,
      title: "Robótica: Avanços e Aplicações",
      fulltext: "Os robôs estão se tornando mais inteligentes e versáteis. Explore os avanços recentes na robótica e como essas máquinas estão sendo aplicadas em setores como saúde, manufatura e exploração espacial.",
      available: true
    },
    {
      id: 13,
      title: "A Convergência da Tecnologia e Saúde",
      fulltext: "A tecnologia está desempenhando um papel vital na transformação do setor de saúde. Desde dispositivos médicos inteligentes até telemedicina, descubra como a inovação tecnológica está melhorando o cuidado com a saúde.",
      available: true
    },
    {
      id: 14,
      title: "Smart Cities: O Futuro Urbano",
      fulltext: "As cidades inteligentes estão usando tecnologia para melhorar a qualidade de vida dos residentes. Explore como a infraestrutura digital está transformando os espaços urbanos em lugares mais eficientes e sustentáveis.",
      available: true
    },
    {
      id: 15,
      title: "A Ascensão da Automação Industrial",
      fulltext: "A automação está redefinindo os processos industriais. Descubra como robôs e sistemas autônomos estão aumentando a eficiência e a precisão na fabricação.",
      available: true
    },
    {
      id: 16,
      title: "Tecnologia Espacial: Explorando o Cosmos",
      fulltext: "Os avanços na tecnologia espacial estão permitindo a exploração de planetas distantes e a busca por vida fora da Terra. Conheça as missões espaciais mais recentes e as tecnologias que tornam isso possível.",
      available: true
    },
    {
      id: 17,
      title: "Inteligência Artificial na Medicina",
      fulltext: "A inteligência artificial está transformando a prática médica, desde diagnósticos mais precisos até o desenvolvimento de tratamentos personalizados. Descubra como a IA está revolucionando a área da saúde.",
      available: true
    },
    {
      id: 18,
      title: "Privacidade Digital: Desafios e Soluções",
      fulltext: "Com o aumento da conectividade, a privacidade digital tornou-se uma preocupação central. Explore os desafios enfrentados e as soluções inovadoras para proteger a privacidade dos usuários na era digital.",
      available: true
    },
    {
      id: 19,
      title: "Energia Renovável e Tecnologia",
      fulltext: "A tecnologia desempenha um papel crucial na expansão e eficiência das fontes de energia renovável. Saiba como inovações tecnológicas estão impulsionando a transição para uma matriz energética mais sustentável.",
      available: true
    },
    {
      id: 20,
      title: "Computação em Nuvem: Transformando a Infraestrutura de TI",
      fulltext: "A computação em nuvem revolucionou a maneira como empresas gerenciam e armazenam dados. Explore como essa tecnologia está transformando a infraestrutura de TI e impulsionando a inovação empresarial.",
      available: true
    }
    // Continuar com os posts restantes
  ]
}

const Modal = ({ title, fulltext, modal }) => {
  return (
    <View
      style={{
        backgroundColor: 'transparent',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        // top: 200,
        zIndex: 1,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '90%',
          padding: 20,
          height: 300,
          shadowColor: 'red',
          borderWidth: 2,
          backgroundColor: '#f5f5f5',
          gap: 10
        }}>
        <View>
          <Text>{title}</Text>
        </View>
        <View>
          <Text>{fulltext}</Text>
        </View>
        <View>
          <Button title='sair' onPress={modal} />
        </View>
      </View>
    </View>
  )
}


export default function App() {

  const [text, settext] = useState()
  const [passord, setPassword] = useState()
  const [openModal, setOpenModal] = useState(false)
  const [information, setInformation] = useState({})

  let passwordArr = []

  const passwordHandler = (e) => {
    setPassword(String(e).split('').map(i => '*').join(''))
    passwordArr.push(String(text)[String(text).length - 1])
    settext(e)
    console.log(`
    pass: ${passord}
    text: ${text}
    passwordArr: ${passwordArr.join('')}
    `)
    return e
  }

  const modalHandler = (id) => {

    setInformation((config.posts).find((e) => e.id == id))

    if (openModal == false) setOpenModal(true)
    if (openModal == true) setOpenModal(false)
    return console.log(openModal);
  }

  return (

    <View style={{
      height: '100%',
      paddingTop: 30,
    }}>
      <View style={{
        paddingHorizontal: 20,
        paddingTop: 30,
        backgroundColor: '#484D50',
        height: '100%',
      }}>
        <View>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold'
            }}>
            {config.title}
          </Text>
        </View>
        <View style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10
        }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold'
            }}>
            {text}
          </Text>
          {/* <TextInput
            style={{
              padding: 10,
              height: 50,
              color: 'white',
              borderWidth: 2,
              borderColor: 'transparent',
              textAlign: 'center'
            }}
            onChangeText={passwordHandler}
            // textContentType='password'
            // value={(String(text).split('')).map(e => {
            //   // setPassword(password)
            //   return '*'
            // }).join('')}
            value={passord}
            placeholder="password"
            keyboardType="numeric"
          /> */}
          {
            openModal &&
            <Modal
              modal={modalHandler}
              title={information.title}
              fulltext={information.fulltext}
            />
          }
          <FlatList
            data={config.posts}
            renderItem={({ item }) =>
              <Publication
                modal={modalHandler}
                available={item.available}
                description={item.title}
                id={item.id}
              />

            }
          />
        </View>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <StatusBar style="auto" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
