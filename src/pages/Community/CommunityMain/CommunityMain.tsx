import CommunityHeader from './components/CommunityHeader';
import PostType from './components/PostType';
import Search from './components/Search';

const CommunityMain = () => {
  return (
    <>
      <CommunityHeader>
        <Search />
        <PostType />
      </CommunityHeader>
    </>
  );
};

export default CommunityMain;
