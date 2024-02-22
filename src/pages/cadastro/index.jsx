import { useNavigate  } from "react-router-dom";
import { MdEmail, MdLock, MdPeople } from 'react-icons/md'
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";


import { Container,Tenho, Title, Column, TitleLogin, SubtitleLogin, EsqueciText, CriarText, Row, Wrapper } from './styles';

const Cadastro = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors  } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
    });

    const onSubmit = async (formData) => {
        try {
            const { data } = await api.get(`/users?email=${formData.email}&senha=${formData.senha}`);
            
            console.log(data); // Verificar a resposta da API
    
            if (data.length && data[0].id) {
                console.log('Redirecionando para /feed'); // Verificar se o redirecionamento está sendo alcançado
                navigate('/feed');
                return;
            }
    
            alert('Usuário ou senha inválido');
        } catch (error) {
            console.error('Erro ao fazer requisição:', error); // Registrar erros no console
            alert('Houve um erro ao tentar fazer login. Por favor, tente novamente mais tarde.');
        }
    };
    

    
    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Comece agora grátis</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPeople />} name="nome"  control={control} />
                    {errors.nome && <span>Nome é obrigatório</span>}
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
                    {errors.email && <span>E-mail é obrigatório</span>}
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
                    {errors.senha && <span>Senha é obrigatório</span>}
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Ao clicar em "criar minha conta grátis",declaro que aceito as Politicas de 
                        Privacidade e os Termos de Uso da DIO.
                    </EsqueciText>
                </Row>
                <Row>
                    <Tenho>Já tenho Conta.</Tenho><CriarText> Fazer login</CriarText>
                    
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro }