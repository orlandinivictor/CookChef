import { SearcherContainer } from './styles';
import { BsSearch } from 'react-icons/bs';
export const Searcher = () => {
  return (
    <SearcherContainer>
      <div>
        <input placeholder="Procure por nome, ou palavra-chave" type="text" />
        <input placeholder="Categoria" type="text" />
        <button>
          <BsSearch size={20} /> <h6>Procurar</h6>
        </button>
      </div>
    </SearcherContainer>
  );
};
